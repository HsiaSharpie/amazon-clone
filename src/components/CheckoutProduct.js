import Image from "next/image";
import { StarIcon } from "@heroicons/react/solid";
import { useDispatch } from "react-redux";
import { addToBasket, removeFromBasket } from "../slices/basketSlice";


function CheckoutProduct({ id, title, rating, price, description, category, image, hasPrime }) {
    const dispatch = useDispatch();

    const addItemToBasket = () => {
        const product = {
            id, title, rating, price, description, category, image, hasPrime
        }

        // push item to Redux Store
        dispatch(addToBasket(product));
    }

    const removeItemFromBasket = () => {

        // remove item from Redux Store
        dispatch(removeFromBasket({ id }));
    }

    return (
        <div className="grid grid-cols-5">
            <Image 
             src={image}
             height={200}
             width={200}
             objectFit="contain"
            />

            {/* Middle */}
            <div className="col-span-3">
                <p>{title}</p>
                <div className="flex">
                    {Array(rating)
                     .fill()
                     .map((_, i) => (
                        <StarIcon key={i} className="h-5 text-yellow-500"/>
                     ))}
                </div>

                <p className="text-xs my-2 line-clamp-3">{description}</p>
                <div>${price}</div>
                {hasPrime && (
                    <div className="flex items-center space-x-2">
                        <img 
                         loading="lazy"
                         className="w-12"
                         src="https://links.papareact.com/fdw"
                         alt=""
                        />
                        <p className="text-xs text-gray-500">Free Next-day Delivery</p>
                    </div> 
                )}
            </div>
            
            {/* Right & Remove Buttons */}
            <div className="flex flex-col space-y-2 my-auto justify-self-end">
                <button className="button" onClick={addItemToBasket}>Add to Basket</button>
                <button className="button" onClick={removeItemFromBasket}>Remove from Basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
