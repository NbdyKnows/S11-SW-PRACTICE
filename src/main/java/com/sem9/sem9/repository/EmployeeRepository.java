package com.sem9.sem9.repository;

import org.springframework.data.repository.CrudRepository;
//import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.sem9.sem9.entity.Employee;

//@RepositoryRestResource(collectionResourceRel = "empleados", path = "empleados")
public interface EmployeeRepository extends CrudRepository<Employee, Long> {

}
