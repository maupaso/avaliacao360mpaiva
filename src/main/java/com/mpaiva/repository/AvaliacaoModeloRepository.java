package com.mpaiva.repository;

import com.mpaiva.domain.AvaliacaoModelo;

import org.springframework.data.jpa.repository.*;

import java.util.List;

/**
 * Spring Data JPA repository for the AvaliacaoModelo entity.
 */
@SuppressWarnings("unused")
public interface AvaliacaoModeloRepository extends JpaRepository<AvaliacaoModelo,Long> {

}
