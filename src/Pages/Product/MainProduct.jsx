import React,{ useState,useEffect} from 'react'
import Skeleton from 'react-loading-skeleton'

const MainProduct = () => {
    const [ data, setData ] = useState( [] )
    const [ filter, setFilter ] = useState( data )
    const [ loading, setLoading ] = useState( false )
    let ComponentMounted = true
   

    // USE EFFECT FUNCTION THAT TAKES THE WHOLE FUNCTIONALITY IN THE PAGE 
	useEffect( () => {
		
		
         const getProducts = async () =>{
            setLoading( true )
            const response = await fetch( 'https://fakestoreapi.com/products' )
            if ( ComponentMounted ) {
                setData( await response.clone().json() )
                setFilter( await response.json() )
                setLoading( false )
                console.log(filter)
             }
             return () => {
                 ComponentMounted = false
             }
        }
         
        getProducts()
    
    }, [] );


    // Loading    function 
    const Loading = () => {
        return (
					<>
						<div className="flex justify-center">
							<Skeleton className="h-[350px] " />
						</div>

						<div className="flex justify-center">
							<Skeleton className="h-[350px] " />
						</div>
						<div className="flex justify-center">
							<Skeleton className="h-[350px] " />
						</div>
						<div className="flex justify-center">
							<Skeleton className="h-[350px] " />
						</div>
					</>
				);
	}
	


// Filter function .This function  filter  items base on the user preference.When the user click any of the preference buttons
	const filterProduct = ( cat ) => {
		const updatedList = data.filter( ( x ) => x.category === cat )
		setFilter(updatedList)
	}

    
    // The main function that  render  all the component
    const ShowProducts = () => {
        return (
					<>
						{/* Heading button that will help user to filter the items it preference */}
						<div className="md:flex justify-center  grid-col  mt-20  ">
							<button
								className="    border bottom-2 border-indigo-200  hover:bg-primary hover:text-white   p-2 w-40  m-2 rounded-lg   text-gray-600"
								type="button"
								onClick={() => setFilter(data)}
							>
								All
							</button>
							<button
								className=" center   hover:bg-primary hover:text-white  border bottom-2 border-indigo-200  p-2 w-60  m-2 rounded-lg   text-gray-600"
								type="button"
								onClick={() => filterProduct("men's clothing")}
							>
								Men's clothing
							</button>
							<button
								className=" center   hover:bg-primary hover:text-white    border bottom-2 border-indigo-200  p-2 w-60  m-2 rounded-lg   text-gray-600"
								type="button"
								onClick={() => filterProduct("women's clothing")}
							>
								Women's clothing
							</button>
							<button
								className=" center  hover:bg-primary hover:text-white    border bottom-2 border-indigo-200  p-2 w-40  m-2 rounded-lg   text-gray-600"
								type="button"
								onClick={() => filterProduct("jewelery")}
							>
								Jewelry
							</button>
							<button
								className=" center   border bottom-2 border-indigo-200  hover:bg-primary hover:text-white  p-2 w-40  m-2 rounded-lg   text-gray-600"
								type="button"
								onClick={() => filterProduct("electronics")}
							>
								Electronics
							</button>
						</div>

						{/* Showing all the product fetching  by the Api  */}
						{
							<div className="grid gap-2 md:gap-5 lg:grid-cols-3 mt-10   px-20 md:px-40 ">
								{filter.map((product) => (
									<div
										className=" relative overflow-hidden    mt-10  rounded-lg md:hover:shadow-lg align-middle justify-center shadow-sm  lg:max-w-md  bg-white"
										key={product.id}
									>
										<img
											className="object-cover w-full  h-60  object-center hover:scale-110 transition duration-300 ease-in-out bg-transparent"
											src={product.image}
											alt="imag"
										/>
										<div className="p-4">
											<h4 className="text-xl  mb-5 text-gray-700 ">
												{product.title.substring(0, 12)}....
												{/* using the substring method to extract some of the text  */}
											</h4>
											<p className="mb-2  text-gray-600 text-xl ">
												${product.price}
											</p>
											<span className=" flex justify-center">
												<button
													className=" center bg-primary text-white  hover:bg-indigo-700  p-3 w-40  m-2 rounded-lg "
													type="button"
												>
													BUY NOW
												</button>
											</span>
										</div>
									</div>
								))}
							</div>
						}
					</>
				);
     
 }

  return (
		<>
			<div className=" mt-20">
				<div className="flex justify-center ">
					<h1 className="text-center text-5xl leading-loose text-gray-600">
						Latest products{" "}
					</h1>
				</div>
				<div className="  md:px-40 px-10 mb-20 md:mb-0 ">
					<hr className="border border-gray-300" />
				</div>
				{/* RENDING  PRODUCT */}
				<div className=" ">
					{loading ? <Loading /> : <ShowProducts />}
				</div>
			</div>
		</>
	);
}

export default MainProduct;

