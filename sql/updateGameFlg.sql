DROP PROCEDURE IF EXISTS updateGameFlg;
DELIMITER //
-- ********************************************************************************************
-- updateGameFlg フラグアップデート
--
-- 【処理概要】
--   フラグアップデート
--
--
-- 【呼び出し元画面】
--   ログイン
--
-- 【引数】
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
-- ********************************************************************************************
CREATE PROCEDURE `updateGameFlg`(
    IN `_user_num` CHAR(2)
    , OUT `exit_cd` INTEGER
)
COMMENT 'フラグアップデート処理'

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
            update m_user
              set game_flg = 1 - ABS(game_flg)
            where user_num = '",_user_num,"'
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
