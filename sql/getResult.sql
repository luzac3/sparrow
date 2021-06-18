DROP PROCEDURE IF EXISTS getResult;
DELIMITER //
-- ********************************************************************************************
-- getResult 結果一覧取得
--
-- 【処理概要】
--   結果一覧取得
--
--
-- 【呼び出し元画面】
--   順位表
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
CREATE PROCEDURE `getResult`(
    OUT `exit_cd` INTEGER
)
COMMENT '結果一覧取得処理'

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
            SELECT
                mu.USER_NUM
                ,mu.USER_NAME
                ,sc.table_num
                ,sc.table_sub_num
                ,sc.rank_score
                ,sc.rank
            FROM
                m_user mu
            LEFT OUTER JOIN score sc
              on mu.USER_NUM = sc.USER_NUM
            where sc.rank is not null
            order by sc.table_num,sc.table_sub_num,sc.rank asc
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
