import React, { useEffect } from "react";
import './Shopping.css';


function Shopping(props) {
    const { selectLan } = props;

    let contenidoCarrito;
    let articulosCarrito = [];

    useEffect(() => {
        contenidoCarrito = document.querySelector("#lista-carrito tbody");
        cargarStorage();
    }, []);

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
            leerDatosCurso(e.target.parentElement.parentElement);
        }
    };

    const eliminarCurso = e => {
        articulosCarrito = articulosCarrito.filter(cursos => cursos.id !== e.target.getAttribute("data-id"))
        carritoHTML()
    };

    const leerDatosCurso = cursos => {
        const infoCurso = {
            imagen: cursos.querySelector("img").src,
            titulo: cursos.querySelector("h4").textContent,
            precio: cursos.querySelector(".precio span").textContent,
            id: cursos.querySelector("button").getAttribute("data-id"),
            cantidad: 1,
        };

        if (articulosCarrito.some(cursos => cursos.id === infoCurso.id)) {
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
                    <img src="${imagen}" width="80">
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
                    <button data-id="${id}" class="borrar-curso" onClick={eliminarCurso}>X</button>
                </td>
            `;
            contenidoCarrito.appendChild(row);
        });

        sincronizarStorage();
    };

    const sincronizarStorage = () => {
        console.log(localStorage)
        localStorage.setItem("articulosCarrito", JSON.stringify(articulosCarrito))
    };

    return (
        <div className='Shopping'>
            <header></header>
            <main>
                <div className="header">
                    <h1 className="encabezado">{selectLan ? 'Online Courses' : 'Cursos en Línea'}</h1>
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
                                <button id="vaciar-carrito" className="button u-full-width" onClick={vaciarCarrito}>{selectLan ? 'Empty cart' : 'Vaciar Carrito'}</button>
                            </div>
                        </li>
                    </ul>
                </div>
                <div id="lista-cursos" className="container" onClick={agregarCurso}>      
                    <div className="card">
                        <img src={require('./../../images/curso1.webp')} alt='curso1' />
                        <div className="info-card">
                            <h4>{selectLan ? 'HTML5 and CSS3' : 'HTML5 y CSS3'}</h4>
                            <p>Nahuel Esteban</p>
                            <p className="precio"><span className="u-pull-right ">$210</span> $130</p>
                            <button className="agregar-carrito" data-id="1">{selectLan ? 'Add to cart' : 'Agregar Al Carrito'}</button>
                        </div>
                    </div>
                    <div className="card">
                        <img src={require('./../../images/curso2.webp')} alt='curso2' />
                        <div className="info-card">
                            <h4>{selectLan ? 'Bootstrap 4 and Sass' : 'Bootstrap 4 y Sass'}</h4>
                            <p>Nahuel Esteban</p>
                            <p className="precio"><span className="u-pull-right ">$200</span> $150</p>
                            <button className="agregar-carrito" data-id="2">{selectLan ? 'Add to cart' : 'Agregar Al Carrito'}</button>
                        </div>
                    </div>
                    <div className="card">
                        <img src={require('./../../images/curso3.webp')} alt='curso3' />
                        <div className="info-card">
                            <h4>{selectLan ? 'JavaScript' : 'JavaScript'}</h4>
                            <p>Nahuel Esteban</p>
                            <p className="precio"><span className="u-pull-right ">$180</span> $100</p>
                            <button className="agregar-carrito" data-id="3">{selectLan ? 'Add to cart' : 'Agregar Al Carrito'}</button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Shopping;
