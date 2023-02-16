DROP PROCEDURE IF EXISTS getEvent;
DELIMITER //
-- ********************************************************************************************
-- getEvent イベン取得
--
-- 【処理概要】
--   イベントの取得
--
--
-- 【呼び出し元画面】
--   admin
--
-- 【引数】
--   _event_id            :イベントID
--
--
-- 【戻り値】
--		exit_cd            : exit_cd
--		正常：0
--		異常：99
-- --------------------------------------------------------------------------------------------
-- 【更新履歴】
--  2023.2.16 大杉　新規作成
-- ********************************************************************************************
CREATE PROCEDURE `getEvent`(
    IN `_event_id` CHAR(4)
    , OUT `exit_cd` INTEGER
)
COMMENT 'イベント取得処理'

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
        select event_id
            event_name,
            date
    ")
    ;
    IF _event_id = "" THEN

        SET @query = CONCAT(@query, "
          where event_id = '",_event_id,"'
          ;
        ")
        ;
    END IF;

    SET @query_text = @query;

    -- 実行
    PREPARE main_query FROM @query_text;
    EXECUTE main_query;
    DEALLOCATE PREPARE main_query;

    SET exit_cd = 0;

END
//
DELIMITER ;
