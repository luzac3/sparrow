DROP PROCEDURE IF EXISTS rankSet;
DELIMITER //
-- ********************************************************************************************
-- rankScoreSet スコアランク更新
--
-- 【処理概要】
--   スコアランク更新
--
--
-- 【呼び出し元画面】
--   ログイン
--
-- 【引数】
--  _event_id           : イベントID
--  _user_num           : ユーザ番号
--
--
-- 【戻り値】
--		exit_cd            : exit_cd
--		正常：0
--		異常：99
-- --------------------------------------------------------------------------------------------
-- 【更新履歴】
--  2019.8.15 大杉　新規作成
--  2023.2.16 大杉　イベントID追加
-- ********************************************************************************************
CREATE PROCEDURE `rankSet`(
    IN  `_event_id` char(4)
    , IN  `_user_num` char(2)
    , OUT `exit_cd` INTEGER
)

COMMENT 'スコアランク更新処理'

BEGIN

    -- 異常終了ハンドラ
    DECLARE EXIT HANDLER FOR SQLEXCEPTION
    BEGIN
        GET DIAGNOSTICS CONDITION 1 @sqlstate = RETURNED_SQLSTATE, @errno = MYSQL_ERRNO, @text = MESSAGE_TEXT;
        SELECT @sqlstate, @errno, @text;
        ROLLBACK;
        SET exit_cd = 99;
    END;

        SET @query = CONCAT("
          update score as sr
          LEFT OUTER JOIN (
            SELECT user_num,table_num,table_sub_num,FIND_IN_SET(
              score
              , (
                SELECT
                  GROUP_CONCAT(
                    score
                    ORDER BY score DESC
                  )
                FROM score
                where rank is null
                and table_num = (
                  select table_num
                  from score
                  where event_id = '",_event_id,"'
                  and user_num = '",_user_num,"'
                  and rank is null
                )
                and table_sub_num = (
                  select table_sub_num
                  from score
                  where event_id = '",_event_id,"'
                  and user_num = '",_user_num,"'
                  and rank is null
                )
              )
            ) as new_rank
            from score
          ) as temp
            on sr.user_num = temp.user_num
            and sr.table_num = temp.table_num
            and sr.table_sub_num = temp.table_sub_num
          set sr.rank = temp.new_rank
          where (
            select end_game_num from (
              select count(*) as end_game_num
              from score
              where rank is null
              and table_num = (
                select table_num
                from score
                where event_id = '",_event_id,"'
                and user_num = '",_user_num,"'
                and rank is null
              )
              and table_sub_num = (
                select table_sub_num
                from score
                where event_id = '",_event_id,"'
                and user_num = '",_user_num,"'
                and rank is null
              )
              group by table_num,table_sub_num
            ) as temp2
          ) = 4
          and sr.rank is null;
      ")
      ;

  SET @query_text = @query;

  -- 実行
  PREPARE main_query FROM @query_text;
  EXECUTE main_query;
  DEALLOCATE PREPARE main_query;

  SET exit_cd = 0;

END
//
DELIMITER ;
