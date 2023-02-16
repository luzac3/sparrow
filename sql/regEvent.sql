DROP PROCEDURE IF EXISTS regEvent;
DELIMITER //
-- ********************************************************************************************
-- regEvent イベント登録・編集
--
-- 【処理概要】
--   イベント情報の更新、追加をする
--
--
-- 【呼び出し元画面】
--   ログイン
--
-- 【引数】
--   _event_name          :イベント名
--   _table_number        :卓数
--   _date                :イベント日 yyyy-mm-dd形式
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
CREATE PROCEDURE `regEvent`(
    IN `_event_name` CHAR(50)
    , IN `_table_number` INTEGER
    , IN `_date` CHAR(10)
    , IN `_event_id` CHAR(4)
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

    IF _event_id = "" THEN
        SET @query = CONCAT("
            insert into
              m_event (
                event_name,
                table_number,
                date
              ) values (
                '",_event_name,"',
                '",_table_number,"',
                '",_date,"'
              )
        ")
        ;
    ELSE
        SET @query = CONCAT("
          update m_event
            set event_name = '",_event_name,"',
            table_number = '",_table_number,"',
            date = '",_date,"'
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
