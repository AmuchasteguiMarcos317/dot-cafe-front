import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMessage } from "../Features/AlertsSlice";
import "../Styles/EditProfile.css";
import { useUserEditProfileMutation } from "../Features/usersAPI";
import { reload } from "../Features/reloadSlice";
import { useNavigate } from "react-router-dom";
import { setCredentials } from "../Features/usersSlice";

let dataPro = [
  {id: 1, provincia: "Buenos Aires" },
  {id: 2, provincia: "Córdoba" },
  {id: 3, provincia: "Santa Fe" },
  {id: 4, provincia: "Ciudad Autónoma de Buenos Aires" },
  {id: 5, provincia: "Mendoza" },
  {id: 6, provincia: "Tucumán" },
  {id: 7, provincia: "Entre Ríos" },
  {id: 8, provincia: "Salta" },
  {id: 9, provincia: "Misiones" },
  {id: 10, provincia: "Chaco" },
  {id: 11, provincia: "Corrientes" },
  {id: 12, provincia: "Santiago del Estero" },
  {id: 13, provincia: "San Juan" },
  {id: 14, provincia: "Jujuy" },
  {id: 15, provincia: "Río Negro" },
  {id: 16, provincia: "Neuquén" },
  {id: 17, provincia: "Formosa" },
  {id: 18, provincia: "Chubut" },
  {id: 19, provincia: "San Luis" },
  {id: 20, provincia: "Catamarca" },
  {id: 21, provincia: "La Rioja" },
  {id: 22, provincia: "La Pampa" },
  {id: 23, provincia: "Santa Cruz" },
  {id: 24, provincia: "Tierra del Fuego, Antártida e Islas del Atlántico Sur" },
];
function EditProfile() {
    const refData = useRef()
    const dispatch = useDispatch()
    const [editProfile] = useUserEditProfileMutation()
    let userId = useSelector(state => state.auth?.user)
    const navigate = useNavigate()

    const handleSubmit = e => {
        e.preventDefault()
        const dataform = new FormData(refData.current)
        const values = Object.fromEntries(dataform)
        const {address, zipCode, city, province, dni, tel } = values
        if(address !== "" && zipCode !== "" && city !== "" && province !== "" && dni !== "" && tel !== "" ){
            values.id = userId.id
            updateDataUser(values)
        }else {
            dispatch(setMessage({
                message: 'Completa los campos vacios',
                success: false
            }))
        }
    }

    async function updateDataUser(data) {
        try {
            let res = await editProfile(data)
            if(res.data.success){
                dispatch(reload())
                dispatch(setMessage({
                    message: res.data.message,
                    success: true
                }))
                dispatch(setCredentials(data))
                navigate(`/mi-cuenta/${userId.id}`, {replace: true})
            }else {
                console.log(res)
            }
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <div className="containerEditProfile">
      <h2>DIRECCION</h2>
      <form className="editProfileForm" ref={refData} onSubmit={handleSubmit}>
        <label>
          Direccion
          <input defaultValue={userId?.address ? userId?.address : null} type="text" placeholder="Direccion" name="address" />
        </label>
        <label>
          Codigo Postal
          <input defaultValue={userId?.zipCode ? userId.zipCode : null} type="number" placeholder="Codigo postal" name="zipCode" />
        </label>
        <label>
          Ciudad
          <input defaultValue={userId?.city ? userId.city : null} type="text" placeholder="Ciudad" name="city" />
        </label>
        <label>
          Provincia
          <select  name="province">
            <option value={""}>Selecciona una provincia</option>
            {dataPro.map((item) => {
              return <option key={item.id}  value={item.provincia}>{item.provincia}</option>;
            })}
          </select>
        </label>
        <label>
          Dni
          <input defaultValue={userId?.dni ? userId.dni : null} type="number" placeholder="Dni" name="dni" />
        </label>
        <label>
          Telefono
          <input defaultValue={userId?.tel ? userId.tel : null} type="number" placeholder="Telefono" name="tel" />
        </label>
        <button>Editar</button>
      </form>
    </div>
  );
}

export default EditProfile;
