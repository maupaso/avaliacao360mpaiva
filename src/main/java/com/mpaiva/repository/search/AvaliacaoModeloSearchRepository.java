package com.mpaiva.repository.search;

import com.mpaiva.domain.AvaliacaoModelo;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

/**
 * Spring Data ElasticSearch repository for the AvaliacaoModelo entity.
 */
public interface AvaliacaoModeloSearchRepository extends ElasticsearchRepository<AvaliacaoModelo, Long> {
}
