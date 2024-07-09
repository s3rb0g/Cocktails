fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=g')
    .then(response => response.json())
    
    .then(data => {
        var count1 = 0;
        var count2 = 0;

        data.drinks.forEach(elem => {
            if (count1 % 3 == 0){
                count2++;
                const add_div = '<div id="id' + count2 +'" class="con' + count2 + '"></div>';
                document.querySelector('main').insertAdjacentHTML('beforeend', add_div);
            }
            const drink_name = '<div class="container' + count1 + '"> <h2>' + elem.strDrink + '</h2> </div>';
            document.querySelector('main div.con'+ count2).insertAdjacentHTML('beforeend', drink_name);

            const drink_pic = '<img src="' + elem.strDrinkThumb + '" alt="error!" height="200" ></img>';
            document.querySelector('main div div.container'+ count1).insertAdjacentHTML('beforeend', drink_pic);

            let ingredient = [];
            ingredient.push(elem.strIngredient1);
            ingredient.push(elem.strIngredient2);
            ingredient.push(elem.strIngredient3);
            ingredient.push(elem.strIngredient4);
            ingredient.push(elem.strIngredient5);
            ingredient.push(elem.strIngredient6);         
            ingredient = ingredient.filter(item => item !== null);

            var ing = " ";
            ingredient.forEach(element => {
                ing += element + "<br>";
                
            });

            const drink_ingredient = '<p><h4>Ingredients:</h4>' + ing + '</p>';
            document.querySelector('main div div.container'+ count1).insertAdjacentHTML('beforeend', drink_ingredient);

            const drink_instruction = '<p><h4>Instructions:</h4>' + elem.strInstructions + '</p>';
            document.querySelector('main div div.container'+ count1).insertAdjacentHTML('beforeend', drink_instruction);

            count1++
        })
        
        for(var i = 1; i <= 9; i++){
            var find_id = document.getElementById("id" + i);
            find_id.className = "grid_temp";
        }
        

    })
    .catch(error => console.log(Error));