import React, {useState, useEffect} from "react";
import {Link, useNavigate} from "react-router-dom";
import { createRecipe, getDiets } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import style from "./Form.module.css"






const Form = ()=>{

    const dispatch= useDispatch();
    const navigate=useNavigate();
   
    const diets = useSelector((state)=> state.diets)

    const [form, setForm] = useState({
        title: "",
        summary:"",
        healthScore:"",
        instructions:"",
        diets:[],
        image:"",
    })

    const [checked, setChecked] = useState({})

    const [errors, setErrors] = useState({
        title: "",
        summary:"",
        healthScore:"",
        instructions:"",
        diets:[],
        image:"",
    });

    const handleChange = (e)=>{
            validate({
                     ...form,
                     [e.target.name]: e.target.value
                    })

            setForm({
            ...form,
            [e.target.name]: e.target.value
                     })     
    }

    const handleSelect = (e)=>{
        const dietId = e.target.value;
        const isChecked= e.target.checked;
        
        setChecked({
          ...checked,
          [dietId] : isChecked
        })
        setForm({
          ...form,
          diets: isChecked
          ? [...form.diets, dietId]
          : form.diets.filter((id)=> id !== dietId)
        })
      }

  



    const handleSubmit = (e) => {
        e.preventDefault();
        validate(form);
        if (Object.values(errors).some((error) => error !== "")) {
          return alert("Faltan datos");
        }
        dispatch(createRecipe(form));
        alert("Receta creada!");
        setForm({
          title: "",
          summary: "",
          healthScore: "",
          instructions: "",
          diets: [],
          image: "",
        });
        setChecked({})
          navigate("/home")
      };
      

    useEffect(()=>{
        dispatch(getDiets())
    }, []);


    const validate = (form)=>{
         let newErrors = {};

         if (form.title) {
            newErrors.title = "";
          } else {
            newErrors.title = "Complete the title";
          }
      
          if (!form.summary) {
            newErrors.summary = "Complete the summary";
          } else {
            newErrors.summary = "";
          }

          if (isNaN(form.healthScore)) {
            newErrors.healthScore = "Health Score must be a number";
          } else {
            const healthScore = parseInt(form.healthScore);
            if (healthScore <= 0 || healthScore >= 100) {
              newErrors.healthScore =
                "Health score must be greater than 0 and less than 100";
            }
          }

          if (!form.instructions) {
            newErrors.instructions = "Complete instructions";
          } else {
            newErrors.instructions = "";
          }

          if (!form.diets || form.diets.length === 0) {
            newErrors.diets = "Select at least one diet";
          } else{
            newErrors.diets = "";
          }


          if (!form.image) {
            newErrors.image = "enter an image";
          } else {
            newErrors.image = "";
          }

        
       setErrors(newErrors) 
    }


    return(
        <>
        <div className={style.contenedor}>

        
        <div>
            <Link to="/home">
                <button className={style.button}>Return Home</button> 
            </Link>
        </div>
        <h1 className={style.title}>Create your recipe</h1>
        <form  onSubmit={handleSubmit}>
            <div>
                <label htmlFor="title" className={style.title}>Title: </label>
                <input type="text" name="title" value={form.title} onChange={handleChange} className={style.inp} />
            </div>
           {errors.title && <span className={style.title} >{errors.title}</span>}

            <div>
                <label htmlFor="summary" className={style.title}>Summary: </label>
                <textarea
                name="summary"
                onChange={handleChange}
                value={form.summary}
                className={style.inp} 
              />
            </div>
            {errors.summary && <span className={style.title} >{errors.summary}</span>}
            
            <div>
                <label htmlFor="healthScore" className={style.title}>Health score: </label>
                <input type="text" name="healthScore" value={form.healthScore} onChange={handleChange} className={style.inp} />
            </div>
            {errors.healthScore && <span className={style.title} >{errors.healthScore}</span>}
           
            <div>
                <label htmlFor="instructions" className={style.title}>Instructions: </label>
                
                <textarea
                name="instructions"
                onChange={handleChange}
                value={form.instructions}
                className={style.inp} 
              />
            </div>
            {errors.instructions && <span className={style.title} >{errors.instructions}</span>}
            
            <hr />
            <label className={style.title}>Choose one diet or more </label>
            <hr />
            {diets.length ? (
                diets.map((element) => {
                  return (
                    <label className={style.cont}>
                      <input
                        type="checkbox"
                        value={element.id}
                        name={element.name}
                        onChange={handleSelect}
                        className={style.check}
                      />
                      {element.name}
                    </label>
                  );
                })
              ) : (
                <div>Waiting...</div>
              )}
            {errors.diets && <span className={style.title} >{errors.diets}</span>}

            <div>
                <label htmlFor="image" className={style.title} >Image: </label>
                <input type="text" name="image" value={form.image} onChange={handleChange} className={style.inp}  />
            </div>
            {errors.image && <span className={style.title} >{errors.image}</span>}

            <button type="submit" className={style.button}>Create recipe</button>

        </form>
                  
        </div>
        </>

    )

};

export default Form;