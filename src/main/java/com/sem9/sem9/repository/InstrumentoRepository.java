package com.sem9.sem9.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.sem9.sem9.entity.Instrumento;

@RepositoryRestResource(collectionResourceRel = "instrumentos", path = "instrumentos")
public interface InstrumentoRepository extends CrudRepository<Instrumento, Long> {

}
