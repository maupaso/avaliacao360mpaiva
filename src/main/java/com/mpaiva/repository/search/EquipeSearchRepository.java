package com.mpaiva.repository.search;

import com.mpaiva.domain.Equipe;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

/**
 * Spring Data ElasticSearch repository for the Equipe entity.
 */
public interface EquipeSearchRepository extends ElasticsearchRepository<Equipe, Long> {
}
