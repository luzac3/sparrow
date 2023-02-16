DROP PROCEDURE IF EXISTS getAllUserData;
DELIMITER //
-- ********************************************************************************************
-- getAllUserData ユーザデータ全取得
--
-- 【処理概要】
--   ユーザ情報をすべて取得する
--
--
-- 【呼び出し元画面】
--   ログイン
--
-- 【引数】
--   _event_id            :イベントID
--   _user_num            :ユーザ番号
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
CREATE PROCEDURE `getAllUserData`(
    IN `_event_id` CHAR(4)
    , IN `_user_num` CHAR(50)
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
                ,GAME_FLG
            FROM
                m_user
            WHERE
                EVENT_ID = '",_event_id,"'
            AND
                USER_NUM = '",_user_num,"'
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
