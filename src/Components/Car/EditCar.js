import React from 'react';


const EditCar = () => {
  return (
    <div className="edit-car" style={{ position: 'absolute', left: '25rem', right: '1rem', top: '7rem' }}>
      <h4>Edit Car</h4>
      <div className="row" style={{ backgroundColor: '#ffff', padding: '20px', marginRight: '10px' }}>
        <form action="">
          <div className="col">
            <div className="mb-3 row">
              <label className="col-sm-2 col-form-label">Nama/Tipe Mobil</label>
              <div className="col-sm-10">
                <input id="name" name="name" type="text" className="form-control" placeholder="Input Nama/Tipe Mobil" />
              </div>
            </div>
            <div className="mb-3 row">
              <label className="col-sm-2 col-form-label">Harga</label>
              <div className="col-sm-10">
                <input id="price" name="price" type="number" className="form-control" placeholder="Input Harga Sewa Mobil" />
              </div>
            </div>
            {/* <div className="mb-3 row">
                        <label className="col-sm-2 col-form-label">Status</label>
                        <div className="col-sm-10">
                            <input id="status" name="status" type="text" className="form-control" placeholder="Input Status"  />
                        </div>
                    </div> */}
            <div className="mb-3 row">
              <label className="col-sm-2 col-form-label">Foto</label>
              <div className="col-sm-10">
                <input
                  className="foto"
                  type="file"
                  // accept="image/*"
                  // onChange={(e) =>
                  // seFormData({
                  //     ...formData,
                  //     image: e.target.files[0],
                  // })
                  // }
                  id="foto"
                />
                <p className="text-muted">File Size Max. 2 MB</p>
              </div>
            </div>
            <div className="mb-3 row">
              <label className="col-sm-2 col-form-label">Kategori</label>
              <div className="col-sm-10">
                <input id="category" name="category" type="text" className="form-control" placeholder="Kategori Mobil" />
              </div>
            </div>
            <div className="mb-3 row">
              <label className="col-sm-2 col-form-label">Created at</label>
              <div className="col-sm-10">-</div>
            </div>
            <div className="mb-3 row">
              <label className="col-sm-2 col-form-label">Updated at</label>
              <div className="col-sm-10">-</div>
            </div>
            <div className="button mt-5">
              <button className="btn btn-outline-primary">Cancel</button>
              <button className="btn btn-primary ms-2">Save</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditCar;
