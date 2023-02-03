import React, {useState} from 'react';
import Pseudo from './input/Pseudo';
import Select from './input/Select';
import ProductCard from './sous-composante/ProductCard';
import Submit from './input/Submit';
import Number from './input/Number';
import Texte from './input/Texte';




const Json = () => {

    const [lists, setList] = useState([
        {id:1, produit:'viande', quantite:5, active:'true', comment:'excellent pièce de viande'},
        {id:2, produit:'pain', quantite:7, active:'true', comment:'pain traditionnel'},
        {id:3, produit:'cassoulet', quantite:5, active:'true', comment:'cassoulet en conserve'},
        {id:4, produit:'poisson', quantite:10, active:'true', comment:'Vivaneau guyannais'},
        {id:5, produit:'Jus', quantite:15, active:'true', comment:'caresse guyannaise cerise'},
        {id:6, produit:'vin', quantite:20, active:'true', comment:'excellent vin de bordeaux'},
        
    
    ]);

    const [produit, setValue] = useState('');
    const [quantite, setQuantite] = useState(0);
    const [comment, setComment] = useState('');



    const [active, setActive] = useState(true);

    const handleActive = ()=>{
        if(lists.active == true){
            setActive(false)
            styleArticle = "articleProd ArticleTrue"
        }

        if (lists.active == false){
            setActive(true)
            styleArticle = "articleProd ArticleFalse"
        }
    }

    
    const handleProduit = (e) => {
        setValue(e.target.value);
      };
    
      const handleQuantite = (e) => {
        setQuantite(e.target.value);
      };

      const handleComment = (e) => {
        setComment(e.target.value);
      };
   
   

    const handleUpdate = (e) =>{
        e.preventDefault();
        setList([...lists, { id: lists.length + 1, produit, quantite, active:'true', comment}]);
        console.log(lists);

    }

    const deleteProduct = (id)=> {
        console.log(id);

        const newList = [...lists];
        const dltProduct = newList.filter(list => list.id !== id);

        setList(dltProduct);
    }




    return (
        <div>
            <header>
                <h1>Liste de cours</h1>
            </header>
            <section>

                    <form action="" key = {lists.id} onSubmit={handleUpdate}>

                            <Pseudo  handleProduit={handleProduit} />


                            <Number handleQuantite ={handleQuantite}/>


                            

                            <Texte handleComment={handleComment}/>

                            <label> Produit
                                

                                <select name="produit">
                                    
                                    <option value="modifier">Modifier</option>

                                    {lists.map((list) =>{
                            return <Select props = {list}/>
                             })};  
                            
                                
                                </select>

                            </label> 

                            <Submit/>


                    </form>
                    

            </section>

                    

            <section className='cards'>

            {lists.map((product)=>{
                            return <ProductCard productProps={product} deleteProduct={deleteProduct}/>
                    })};

            </section>
        </div>
    );
};

export default Json;