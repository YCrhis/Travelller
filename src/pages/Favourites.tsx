import { motion } from "framer-motion"
import CartItem from "../components/CartItem"
import Content from "../layout/Content"
import { CardContext } from "../context/CardContext"
import { useContext } from "react"
import NotFound from "../components/NotFound"
import { pageAnimation, transition2 } from "../lib/animation"

const Favourites = () => {

    const {card} = useContext(CardContext)

  return (
    <Content>
        <motion.div
         initial="out"
         animate="in"
         exit="out"
         variants={pageAnimation}
         transition={transition2}
        >
        <div className="flex xl:flex-row sm:flex-col items-center justify-between mt-10 border-b-2 border-zinc-300 pb-10">
            <h1 className="text-3xl font-semibold text-zinc-800"> <i className="fa-solid fa-cart-shopping mr-4"></i>Shopping Cart</h1>
            <p className="text-3xl font-semibold text-zinc-800 sm:mt-6 xl:mt-0">{card.length} Items</p>
        </div>
        <div className="mt-10 ooverflow-x-clip  w-[100%]">
            {card.length > 0  ? card.map((c:any)=>(
                <CartItem
                    cart={c}
                    key={c.id}
                />
            ))
        :
        <NotFound/>
        }
        </div>
        </motion.div>
    </Content>
  )
}

export default Favourites