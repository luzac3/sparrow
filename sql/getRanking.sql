DROP PROCEDURE IF EXISTS getRanking;
DELIMITER //
-- ********************************************************************************************
-- getRanking ランキング取得
--
-- 【処理概要】
--   ランキング取得
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
CREATE PROCEDURE `getRanking`(
    OUT `exit_cd` INTEGER
)
COMMENT 'ランキング取得処理'

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
              sc2.USER_NUM
              ,sc2.USER_NAME
              ,TRUNCATE(sc2.rank_score,1) rank_score
              ,FIND_IN_SET(
                rank_score
                , (
                  SELECT GROUP_CONCAT(
                    rank_score ORDER BY rank_score DESC
                  ) FROM (
                    select
                      mu.USER_NUM
                      ,mu.USER_NAME
                      ,sum(sc.rank_score) as rank_score
                    from
                      m_user mu
                    LEFT OUTER JOIN score sc
                      on mu.USER_NUM = sc.USER_NUM
                    where sc.rank is not null
                    group by mu.USER_NUM,mu.USER_NAME
                  ) sc3
                )
              ) as rank
            FROM
              (
                select
                  mu.USER_NUM
                  ,mu.USER_NAME
                  ,sum(sc.rank_score) as rank_score
                from
                  m_user mu
                LEFT OUTER JOIN score sc
                  on mu.USER_NUM = sc.USER_NUM
                where sc.rank is not null
                group by mu.USER_NUM,mu.USER_NAME
              ) sc2
            order by rank asc
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
