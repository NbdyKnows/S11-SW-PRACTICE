package com.sem9.sem9.database;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import com.sem9.sem9.entity.Employee;
import com.sem9.sem9.entity.Instrumento;
import com.sem9.sem9.repository.EmployeeRepository;
import com.sem9.sem9.repository.InstrumentoRepository;

@Component
public class DatabaseLoader implements CommandLineRunner {

	private final InstrumentoRepository repository1;
	private final EmployeeRepository repository2;	

	@Autowired
	public DatabaseLoader(InstrumentoRepository repository1, EmployeeRepository repository2) {
		this.repository1 = repository1;
		this.repository2 = repository2;
	}

	@Override
	public void run(String... strings) throws Exception {
		this.repository1.save(new Instrumento("Guitarra", "Cuerda", "de madera, con caja de resonancia, 6 cuerdas templadas"));
		this.repository1.save(new Instrumento("Ukelele", "Cuerda", "de madera, con caja de resonancia pequeña, 4 cuerdas templadas"));
		this.repository1.save(new Instrumento("Melódica", "Viento", "Teclado pequeño de 2 octavas, sonorisado por soplido"));
	
		this.repository2.save(new Employee("Frodo", "Baggins", "ring bearer"));
	}

}