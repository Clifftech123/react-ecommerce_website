import React from 'react'

const Logins = () => {
  return (
		<>
			<div className="h-full relative   flex  justify-center min-h-screen overflow-hidden  items-center  sm:px-6 lg:px-8">
				<div className="max-w-md py-10 shadow-md   bg-white w-full space-y-5">
					<div>
						<h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
							Sign in to your account
						</h2>
					</div>
					<form className="mt-8 p-10 space-y-6" action="#" method="POST">
						<div className="rounded-md  p-30 shadow-sm -space-y-px">
							
								<input
									id="email-address"
									name="email"
									type="email"
									required
									className="appearance-none  mt-5   rounded-none relative block
                  w-full px-3 py-2 border border-gray-300
                  placeholder-gray-500 text-gray-900 rounded-t-md
                  focus:outline-none focus:ring-indigo-500
                  focus:border-indigo-500 focus:z-10 sm:text-sm"
									placeholder="Email address"
								/>
							
							<div className=''>
								<input
									id="password"
									name="password"
									type="password"
									autoComplete="current-password"
									required
									className="    mt-5    relative block
                  w-full px-10 py-2 border border-gray-300
                  placeholder-gray-500 text-gray-900 rounded-b-md
                  focus:outline-none focus:ring-indigo-500
                  focus:border-indigo-500 focus:z-1 sm:text-sm"
									placeholder="Password"
								/>
							</div>
						</div>

						<div className="flex items-center justify-between">
							<div className="flex items-center">
								<input
									id="remember-me"
									name="remember-me"
									type="checkbox"
									className="h-4 w-4 text-indigo-600 focus:ring-indigo-500
                  border-gray-300 rounded"
								/>
								<label
									htmlFor="remember-me"
									className="ml-2 block text-sm text-gray-900"
								>
									Remember me
								</label>
							</div>

							<div className="text-sm">
								<a
									href="/"
									className="font-medium text-indigo-600 hover:text-indigo-500"
								>
									Forgot your password?
								</a>
							</div>
						</div>

						<div>
							<button
								type="submit"
								className="group relative w-full flex justify-center
                py-2 px-4 border border-transparent text-sm font-medium
                rounded-md text-white bg-indigo-600 hover:bg-indigo-700
                focus:outline-none focus:ring-2 focus:ring-offset-2
                focus:ring-indigo-500"
							>
								Sign in
							</button>
						</div>
					</form>
				</div>
			</div>
		</>
	);
}

export default Logins;
