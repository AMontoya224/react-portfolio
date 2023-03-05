import React, { useEffect } from "react";
import './Shopping.css';


function Shopping(props) {
    const { selectLan } = props;

    const carrito = document.querySelector("#carrito");

    let contenidoCarrito = 0;
    let vaciarCarritoBtn = 0;
    let listaCursos = 0;
    let articulosCarrito = [];

    useEffect(() => {
        contenidoCarrito = document.querySelector("#lista-carrito tbody");
        vaciarCarritoBtn = document.querySelector("#vaciar-carrito");
        listaCursos = document.querySelector("#lista-cursos");
        cargarStorage();
    }, []);

    /*useEffect(() => {
        cargarStorage();
    }, [articulosCarrito]);*/

    const limpiarHTML = () => {
        while (contenidoCarrito.firstChild) {
            contenidoCarrito.removeChild(contenidoCarrito.firstChild)
        }
    };

    const vaciarCarrito = () => {
        articulosCarrito = [];
        limpiarHTML();
    };

    const agregarCurso = e => {
        e.preventDefault();
        if (e.target.classList.contains("agregar-carrito")) {
            const cursoSelecionado = e.target.parentElement.parentElement;
            leerDatosCurso(cursoSelecionado)
        }
    };

    const eliminarCurso = e => {
        if (e.target.classList.contains("borrar-curso")) {
            const cursoId = e.target.getAttribute("data-id")
            articulosCarrito = articulosCarrito.filter(cursos => cursos.id !== cursoId)
            carritoHTML()
        }
    };

    const leerDatosCurso = cursos => {
        const infoCurso = {
            imagen: cursos.querySelector("img").src,
            titulo: cursos.querySelector("h4").textContent,
            precio: cursos.querySelector(".precio span").textContent,
            id: cursos.querySelector("a").getAttribute("data-id"),
            cantidad: 1,
        };

        const existe = articulosCarrito.some(cursos => cursos.id === infoCurso.id);

        if (existe) {
            const cursos = articulosCarrito.map(cursos => {
                if (cursos.id === infoCurso.id) {
                    cursos.cantidad++;
                    return cursos;
                }
                else {
                    return cursos;
                }
            })
            articulosCarrito = [...cursos]
        }
        else {
            articulosCarrito = [...articulosCarrito, infoCurso];
        }
        carritoHTML();
    };

    const cargarStorage = () => {
        articulosCarrito = JSON.parse(localStorage.getItem("articulosCarrito")) || [];
        carritoHTML();
    };

    const carritoHTML = () => {
        limpiarHTML()
        articulosCarrito.forEach(cursos => {
            const { imagen, titulo, precio, cantidad, id } = cursos;
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>
                    <img src="${imagen}" width="100">
                </td>
                <td>
                    ${titulo}
                </td>
                <td>
                    ${precio}
                </td>
                <td>
                    ${cantidad}
                </td>
                <td>
                    <a href="#" className="borrar-curso" data-id="${id}" > X </a>
                </td>
            `;
            contenidoCarrito.appendChild(row);
        });

        sincronizarStorage();
    };

    const sincronizarStorage = () => {
        localStorage.setItem("articulosCarrito", JSON.stringify(articulosCarrito))
    };

    return (
        <div className='Shopping'>
            <header id="header" className="header">
                <div className="row">
                    <div>
                        <p>Monty<b>Ang</b></p>
                    </div>
                    <div className="two columns u-pull-right">
                        <ul>
                            <li className="submenu">
                                <span className="material-symbols-outlined">shopping_cart</span>
                                <div id="carrito" onClick={eliminarCurso}>
                                    <table id="lista-carrito">
                                        <thead>
                                            <tr>
                                                <th>{selectLan ? 'Image' : 'Imagen'}</th>
                                                <th>{selectLan ? 'Name' : 'Nombre'}</th>
                                                <th>{selectLan ? 'Price' : 'Precio'}</th>
                                                <th>{selectLan ? 'Amount' : 'Cantidad'}</th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody></tbody>
                                    </table>
                                    <a href="#" id="vaciar-carrito" className="button u-full-width" onClick={vaciarCarrito}>{selectLan ? 'Empty cart' : 'Vaciar Carrito'}</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
            <div id="lista-cursos" className="container" onClick={agregarCurso}>
                <h1 id="encabezado" className="encabezado">{selectLan ? 'Online Courses' : 'Cursos En Línea'}</h1>
                <div className="row">
                    <div className="card">
                        <img src={require('./../../images/curso1.jpg')} alt='curso1' />
                        <div className="info-card">
                            <h4>{selectLan ? 'HTML5 and CSS3 for Beginners' : 'HTML5 y CSS3 para Principiantes'}</h4>
                            <p>Nahuel Esteban</p>
                            <p className="precio">$200  <span className="u-pull-right ">$150</span></p>
                            <a href="#" className="agregar-carrito" data-id="1">{selectLan ? 'Add to cart' : 'Agregar Al Carrito'}</a>
                        </div>
                    </div>
                    <div className="card">
                        <img src={require('./../../images/curso2.jpg')} alt='curso2' />
                        <div className="info-card">
                            <h4>{selectLan ? 'Bootstrap 4 and Sass' : 'Bootstrap 4 y Sass'}</h4>
                            <p>Nahuel Esteban</p>
                            <p className="precio">$200  <span className="u-pull-right ">$150</span></p>
                            <a href="#" className="agregar-carrito" data-id="2">{selectLan ? 'Add to cart' : 'Agregar Al Carrito'}</a>
                        </div>
                    </div>
                    <div className="card">
                        <img src={require('./../../images/curso3.jpg')} alt='curso3' />
                        <div className="info-card">
                            <h4>{selectLan ? 'JavaScript for Beginners' : 'JavaScript para Principiantes'}</h4>
                            <p>Nahuel Esteban</p>
                            <p className="precio">$200  <span className="u-pull-right ">$150</span></p>
                            <a href="#" className="agregar-carrito" data-id="3">{selectLan ? 'Add to cart' : 'Agregar Al Carrito'}</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Shopping;
