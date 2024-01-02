import React, {useState} from 'react'

const AdminDashboard = () => {
    const [productImage, setProductImage] =useState(null)

    const handleImageUpload = (e) => {
        const file =  e.target.files[0]
        const reader =new FileReader()

        reader.onloadend = () => {
            setProductImage(reader.result)
        }
        if(file){
            reader.readAsDataURL(file)
        }
    }
    return (
        <>
            <div className='container mt-2'>
                <div className='d-flex justify-content-between'>
                    <h3>Admin Dashboard</h3>



                    <button type="button" class="btn btn-danger" data-mdb-toggle="modal" data-mdb-target="#exampleModal">
                        Add Product
                    </button>

                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLabel">Add Product</h5>
                                    <button type="button" class="btn-close" data-mdb-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <form action="">
                                        <div class="mb=-3">
                                            <label htmlFor="">Product Name</label>
                                            <input type="text" class='form-control' placeholder='Enter Product Name' />

                                            <label htmlFor="">Product Price</label>
                                            <input type="text" class='form-control' placeholder='Enter Product Price' />

                                            <label htmlFor=""> Product Category</label>
                                            <input type="text" class='form-control' placeholder='Enter Product Category' />

                                            <label htmlFor="">Product Description</label>
                                            <textarea class='form-control' name="" id="" row='5'></textarea>

                                            <label htmlFor="">Product Image</label>
                                            <input onChange={handleImageUpload} type="file" class='form-control' placeholder='Enter product image' />
                                            {
                                                productImage && <img src={productImage} alt='' className= 'object-cover rounded-3 mt-2' height='100'></img>
                                            }

                                        </div>

                                    </form>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-mdb-dismiss="modal">Close</button>
                                    <button type="button" class="btn btn-primary">Save changes</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <table class="table mt-3">
                    <thead class="table-info">
                        <tr>
                            <th scope='col'>Product Image</th>
                            <th scope='col'>Product Name</th>
                            <th scope='col'>Product Price</th>
                            <th scope='col'>Category</th>
                            <th scope='col'>Description</th>
                            <th scope='col'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><img src="https://salisburygreenhouse.com/wp-content/uploads/Salisbury-at-Enjoy-Floral-Studio_-1.png" width='50' /></td>
                            <td>Roses</td>
                            <td>200</td>
                            <td>Flower</td>
                            <td>Roses are red</td>
                            <td>
                                <div class="btn-group" role="group" aria-label='buttons'>
                                    <button type="button" class="btn btn-success">Edit</button>
                                    <button type="button" class="btn btn-danger">Delete</button>
                                </div>
                            </td>

                        </tr>
                        <tr>
                            <td><img src="https://salisburygreenhouse.com/wp-content/uploads/Salisbury-at-Enjoy-Floral-Studio_-1.png" width='50' /></td>
                            <td>Roses</td>
                            <td>200</td>
                            <td>Flower</td>
                            <td>Roses are red</td>
                            <td>
                                <div class="btn-group" role="group" aria-label='buttons'>
                                    <button type="button" class="btn btn-success">Edit</button>
                                    <button type="button" class="btn btn-danger">Delete</button>
                                </div>
                            </td>

                        </tr>
                    </tbody>
                </table>
            </div>
        </>

    )
}

export default AdminDashboard