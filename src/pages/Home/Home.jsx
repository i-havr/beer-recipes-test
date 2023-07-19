import { useState, useEffect } from "react";
import { BeersList } from "../../components/BeersList";
import { Button } from "../../components/Button";
import { getBeers } from "../../services/BeerApi";
import { useRecipes, usePages } from "../../store";

import * as SC from "./Home.styled";

export default function Home() {
  const [selectedRecipes, setSelectedRecipes] = useState([]);
  const [isFirstRender, setIsFirstRender] = useState(true);

  const { recipes, addRecipes, refreshRecipes, deleteRecipes } = useRecipes();
  const { page, updatePage } = usePages();

  useEffect(() => {
    if (isFirstRender) {
      setIsFirstRender(false);
      return;
    }

    const getBeersList = async () => {
      try {
        const data = await getBeers(page);
        addRecipes(data);
        updatePage(page + 1);
      } catch (error) {
        console.log("Whoops, something went wrong ", error.message);
      }
    };

    recipes.length < 15 && getBeersList();
  }, [addRecipes, isFirstRender, page, recipes.length, updatePage]);

  const toggleSelecting = (event, id) => {
    event.preventDefault();

    selectedRecipes.includes(id)
      ? setSelectedRecipes((prev) => prev.filter((el) => el !== id))
      : setSelectedRecipes((prev) => [...prev, id]);
  };

  const refreshRecipesList = () => {
    refreshRecipes();
    setSelectedRecipes([]);
    updatePage();
  };

  const handleDeleteSelected = () => {
    deleteRecipes(selectedRecipes);
    setSelectedRecipes([]);
  };

  return recipes.length ? (
    <SC.Home>
      <Button type="refresh" actionHandler={() => refreshRecipesList()}>
        Refresh the list
      </Button>
      {selectedRecipes.length ? (
        <Button actionHandler={handleDeleteSelected}>Delete selected</Button>
      ) : null}

      <SC.Container>
        <h2>LEFT click to open, RIGHT click to select</h2>
        <BeersList
          beers={recipes.slice(0, 15)}
          onSelectRecipe={toggleSelecting}
          selectedRecipes={selectedRecipes}
        />
      </SC.Container>
    </SC.Home>
  ) : null;
}
