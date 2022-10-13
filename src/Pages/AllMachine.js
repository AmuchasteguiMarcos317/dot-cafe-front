import React from "react";
import ProductCard from "../Components/ProductCard";
import { useGetAllCoffeeMachinesQuery } from "../Features/coffeeMachinesAPI";
import "../Styles/AllCards.css";
import Spinner from '../Components/Spinner.js/Spinner'

export default function CoffeeMachines() {
  const { data: coffeeMachines } = useGetAllCoffeeMachinesQuery();
  let dataMachine = coffeeMachines?.cofMachine;

  return (
    <>
      <main>
        {dataMachine?.length > 0 ? (
          <div class="AllCardsContainer">
            <h2 className="CardsTitle">Maquinas de café: Todas</h2>
            <div className="CardsContainer">
              {dataMachine?.map((machine) => (
                <ProductCard data={machine} linkTo={machine._id} />
              ))}
            </div>
          </div>
        ) : 
        <div className="containerSpinner">
            <Spinner/>
        </div>
        }
      </main>
    </>
  );
}
