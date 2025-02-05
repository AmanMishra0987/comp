const CareerProfile = ({ image, name, designation, linkedin }) => {
  return (
    <div class="col-xl-3 col-sm-6 mb-5">
      <div class="bg-white rounded shadow-sm py-5 px-4">
        <img
          src={image}
          alt=""
          width="100"
          class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
        />
        <h5 class="mb-0 text-black">{name}</h5>
        <span class="small  text-muted">{designation}</span>
        <ul class="social mb-0 list-inline mt-3">
          <a href={linkedin}>
            <li class="list-inline-item">
              <i class="fa-brands fa-linkedin"></i>
            </li>
          </a>
        </ul>
      </div>
    </div>
  );
};

export default CareerProfile;
