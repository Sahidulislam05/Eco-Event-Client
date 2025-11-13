

const NewsLetter = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center px-4 md:px-8">
        <div className="card lg:card-side bg-linear-to-r from-pink-400/50 to-pink-500/40 shadow-lg rounded-xl overflow-hidden w-full max-w-5xl">
          <figure className="flex justify-center items-center p-4 md:p-10 bg-pink-100/30">
            <img
              src="https://i.ibb.co/N21d0mfP/computer-icons-email-newsletter-png-favpng-n-Pn8-BZ3bfrmv-Ww0-Ny-UXJstman-removebg-preview.png"
              alt="Newsletter"
              className="w-40 md:w-96"
            />
          </figure>

          <div className="card-body flex flex-col justify-center items-center md:items-start p-4 md:p-10">
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-center md:text-left text-gray-900 mb-6">
              Subscribe to our Newsletter
            </h1>

            <div className="join w-full max-w-md">
              <input
                type="email"
                placeholder="Enter a valid email address"
                required
                className="input input-bordered join-item w-full"
              />
              <button className="btn btn-neutral join-item">Subscribe</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
