const postHandler = async (req,res)=>{
    const {title, image, summary, healthScore, instructions, diets} = req.body;

    try{
        if(!title || !image || !summary || !healthScore ||!instructions ) throw new Error('Faltan datos obligatorios')
        const newRecipe =  await createNewRecipe(title,image,summary,healthScore,instructions);
         await newRecipe.addDiets(diets)
        
        res.status(201).json(newRecipe)

    }catch(error){
        res.status(400).json({error: error.message})

    }

};


