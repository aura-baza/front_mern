import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { ContextProducts } from "../../Context/ProviderPorducts";
import { Toaster, toast } from "sonner";

const Products = () => {
  const navegar = useNavigate();
  const { products, setProducts } = useContext(ContextProducts);
  const getAllProducts = async () => {
    try {
      const response = await fetch(
        process.env.REACT_APP_URL_BACK + "/getAllProducts"
      );
      const dataResponse = await response.json();
      setProducts([...dataResponse.data]);
    } catch (error) {
      console.log(error);
    }
    //  console.log(process.env.REACT_APP_URL_BACK);
  };
  const deleteProduct = (e, codigo) => {
    e.preventDefault();
    toast("¿Desea eliminar este producto?", {
      action: {
        label: "SI",
        onClick: async () => {
          try {
            const response = await fetch(
              process.env.REACT_APP_URL_BACK + "/deleteProduct/" + codigo,
              { method: "DELETE" }
            );
            const dataResponse = await response.json();
            if (dataResponse.response) {
              const filerProduct = products.filter(
                (product) => product.codigo != codigo
              );
              console.log(filerProduct);
              setProducts([...filerProduct]);
              toast.success('Producto eliminado con éxito');
            }
            console.log(dataResponse);
          } catch (error) {
            console.log(error);
          }
        },
      },
      cancel: {
        label: "NO",
        onClick: () => console.log(""),
      },
    });

    //  console.log(process.env.REACT_APP_URL_BACK);
  };
  useEffect(() => {
    getAllProducts();
  }, []);
  return (
    <>
      <Toaster richColors />
      <div>
        <header>
          <h1>INVENTARIO</h1>
        </header>
        <main>
          <section className="product-list">
            <div className="ct_header">
              <h2 className="subtitle">Listado de Productos</h2>
              <button
                className="btn_add"
                onClick={() => navegar("/addProducts")}
              >
                Agragar producto
              </button>
            </div>

            <table className="table">
              <thead>
                <tr>
                  <th>Codigo</th>
                  <th>Nombre</th>
                  <th>Precio</th>
                  <th>Cantidad</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {products.length > 0 ? (
                  <>
                    {products.map((product) => {
                      return (
                        <tr>
                          <td className="product-name">{product.codigo}</td>
                          <td className="product-name">{product.nombre}</td>
                          <td className="product-price">{product.precio}</td>
                          <td className="product-quantity">
                            {product.cantidad}
                          </td>
                          <td className="product-quantity">
                            <div className="container_btns">
                              <button
                                className="btns edit"
                                onClick={(e) =>
                                  navegar("/updateProducts/" + product.codigo)
                                }
                              >
                                Editar
                              </button>
                              <button
                                className="btns delete"
                                onClick={(e) =>
                                  deleteProduct(e, product.codigo)
                                }
                              >
                                Eliminar
                              </button>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </>
                ) : (
                  "No hay productos para mostar"
                )}
              </tbody>
            </table>
          </section>
        </main>
      </div>
    </>
  );
};

export default Products;
