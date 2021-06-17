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
--
--
-- 【戻り値】
--		exit_cd            : exit_cd
--		正常：0
--		異常：99
-- --------------------------------------------------------------------------------------------
-- 【更新履歴】
--  2019.8.15 大杉　新規作成
-- ********************************************************************************************
CREATE PROCEDURE `rankSet`(
    OUT `exit_cd` INTEGER
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
                SELECT GROUP_CONCAT(
                  score ORDER BY score DESC
                ) FROM score
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
