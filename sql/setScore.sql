DROP PROCEDURE IF EXISTS setScore;
DELIMITER //
-- ********************************************************************************************
-- setScore スコア登録
--
-- 【処理概要】
--   スコア登録
--
--
-- 【呼び出し元画面】
--   ログイン
--
-- 【引数】
--   _user_num            :ユーザ番号
--   _table_number            :卓番号
--   _score            :スコア
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
CREATE PROCEDURE `setScore`(
    IN `_user_num` CHAR(2)
    , IN `_table_number` CHAR(1)
    , IN `_score` INTEGER
    , OUT `exit_cd` INTEGER
)
COMMENT 'スコア登録処理'

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
            insert into score
              (user_num,table_num,table_sub_num,score)
              values(
                '",_user_num,"'
                ,'",_table_number,"'
                ,(
                  select distinct new_table_num from (
                    select TRUNCATE(count(*) / 4, 0) + 1 as new_table_num from score where table_num = '",_table_number,"'
                  ) as temp
                )
                ,",_score,"
              )
            ;
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
