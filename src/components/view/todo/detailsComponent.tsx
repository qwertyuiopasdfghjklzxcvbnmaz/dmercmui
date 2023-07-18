
function DetailsComponent({ todo }: any) {
  return (
    <main id="main" className="main">
            <div className="pagetitle">
                <h1>Todo Details</h1>
            </div>
            <section className="section dashboard">
                <div className="row">
                    <div className='col-12'>
                        <div className='card'>
                            <div className='card-body pb-0'>
                                <div className='col-md-12'>
                                    <h5>{todo?.category}: {todo?.title}</h5>
                                    <h6>Rs: {todo?.price}</h6>
                                    <h6>Brand: {todo?.brand}</h6>
                                    <p>{todo?.description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
  )
}

export default DetailsComponent;