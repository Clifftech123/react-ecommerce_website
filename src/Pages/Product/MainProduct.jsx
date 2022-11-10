import React,{ useState,useEffect} from 'react'

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

    // LOADING FUNCTION THAT SHOWS LOADING ANIMATION ICON
    const Loading = () => {
        return (
            <>
                loading .....
            </>
        )
    }
    
    // SHOWING PRODUCT FUNCTION 
    const ShowProducts = () => {
        return (
					<>
						<div className="flex justify-center  mt-20  ">
							<button
								className="   outline outline-offset-1 outline-gray-700  p-2 w-40  m-2 rounded-lg   text-gray-600"
								type="button"
							>
								All
							</button>
							<button
								className=" center  outline outline-offset-1 outline-gray-700  p-2 w-60  m-2 rounded-lg   text-gray-600"
								type="button"
							>
								Men's cloth
							</button>
							<button
								className=" center  outline outline-offset-1 outline-gray-700  p-2 w-60  m-2 rounded-lg   text-gray-600"
								type="button"
							>
								Women's cloth
							</button>
							<button
								className=" center  outline outline-offset-1 outline-gray-700  p-2 w-40  m-2 rounded-lg   text-gray-600"
								type="button"
							>
								Jewelry
							</button>
							<button
								className=" center  outline outline-offset-1 outline-gray-700  p-2 w-40  m-2 rounded-lg   text-gray-600"
								type="button"
							>
								Electronics
							</button>
						</div>

						{/* SHOWING THE PRODUCT CONTENT */}
						{
							<div className="grid gap-2 md:gap-5 lg:grid-cols-3 mt-10   px-10 md:px-40 ">
								{filter.map((product, key) => (
									<div
										className=" mt-10  rounded-sm     align-middle justify-center shadow-sm  lg:max-w-md  bg-white"
										key={key}
									>
										<img
											className="object-cover w-full h-48"
											src={product.image}
											alt="imag"
										/>
										<div className="p-4">
											<h4 className="text-xl  mb-5 text-gray-700 ">
												{product.title}
											</h4>
											<p className="mb-2  text-gray-600 text-xl ">
												${product.price}
											</p>
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

