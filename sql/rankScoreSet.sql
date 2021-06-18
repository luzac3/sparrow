DROP PROCEDURE IF EXISTS rankScoreSet;
DELIMITER //
-- ********************************************************************************************
-- rankScoreSet ランクスコア更新
--
-- 【処理概要】
--   ランクスコア更新
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
CREATE PROCEDURE `rankScoreSet`(
    OUT `exit_cd` INTEGER
)

COMMENT 'ランクスコア更新処理'

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
          update score set rank_score = (
            CASE
              WHEN rank = '1' THEN (score - 30000) / 1000 + 30
              WHEN rank = '2' THEN (score - 30000) / 1000 + 5
              WHEN rank = '3' THEN (score - 30000) / 1000 - 5
              WHEN rank = '4' THEN (score - 30000) / 1000 - 10
              ELSE null
            END
          )
          where rank is not null
          and rank_score is null;
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
