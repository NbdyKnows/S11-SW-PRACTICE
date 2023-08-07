const React = require("react");
const ReactDOM = require("react-dom");
const client = require("./client");

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { instrumentos: [], employees: [] };
    }
    componentDidMount() {
        client({ method: "GET", path: "/api/instrumentos" }).done(
            (response) => {
                this.setState({
                    instrumentos: response.entity._embedded.instrumentos,
                });
            }
        );

        client({ method: "GET", path: "/api/employees" }).done((response) => {
            this.setState({
                employees: response.entity._embedded.employees,
            });
        });
    }
    render() {
        return (
            <>
                <h2>Vendedores</h2>
                <EmployeeList employees={this.state.employees} />
                <hr />
                <h2>Instrumentos</h2>
                <InstrumentoList instrumentos={this.state.instrumentos} />
            </>
        );
    }
}

class InstrumentoList extends React.Component {
    render() {
        const instrumentos = this.props.instrumentos.map((instrumento) => (
            <Instrumento
                key={instrumento._links.self.href}
                instrumento={instrumento}
            />
        ));
        return (
            <table>
                <tbody>
                    <tr>
                        <th>Nombre</th>
                        <th>Categoría</th>
                        <th>Descripción</th>
                    </tr>
                    {instrumentos}
                </tbody>
            </table>
        );
    }
}

class EmployeeList extends React.Component {
    render() {
        const employees = this.props.employees.map((employee) => (
            <Employee key={employee._links.self.href} employee={employee} />
        ));
        return (
            <table>
                <tbody>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Description</th>
                    </tr>
                    {employees}
                </tbody>
            </table>
        );
    }
}

class Instrumento extends React.Component {
    render() {
        return (
            <tr>
                <td>{this.props.instrumento.nombre}</td>
                <td>{this.props.instrumento.categoria}</td>
                <td>{this.props.instrumento.descripcion}</td>
            </tr>
        );
    }
}

class Employee extends React.Component {
    render() {
        return (
            <tr>
                <td>{this.props.employee.firstName}</td>
                <td>{this.props.employee.lastName}</td>
                <td>{this.props.employee.description}</td>
            </tr>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("react"));
