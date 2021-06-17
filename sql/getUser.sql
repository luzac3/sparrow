DROP PROCEDURE IF EXISTS getUser;
DELIMITER //
-- ********************************************************************************************
-- getUser ユーザ情報取得
--
-- 【処理概要】
--   ユーザ情報を取得する
--
--
-- 【呼び出し元画面】
--   ログイン
--
-- 【引数】
--   _id            :ID
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
CREATE PROCEDURE `getUser`(
    IN `_id` CHAR(50)
    , OUT `exit_cd` INTEGER
)
COMMENT 'ユーザ情報取得処理'

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
                USER_NUM
                ,USER_ID
                ,USER_NAME
            FROM
                m_user
            WHERE
                USER_ID = '",_id,"'
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
