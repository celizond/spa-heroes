import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getHeroById } from "../helpers";
import { useMemo } from "react";

export const HeroPage = () => {

  const { id } = useParams();
  const navigate = useNavigate();
  const hero = useMemo(() =>
    getHeroById(id)
    , [id]);
  const heroImageUrl = `/assets/heroes/${id}.jpg`;

  const onNavigateBack = () => {
    navigate(-1);
  }

  if (!hero) {
    return <Navigate to='/marvel' />
  }

  return (
    <div className="row mt-5 animate__animated animate__fadeInLeft">
      <div className="col-3">
        <img
          src={heroImageUrl}
          alt={hero.superhero}
          className="img-thumbnail"
        />
      </div>

      <div className="col-9">
        <h3>{hero.superhero}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item"> <b>Alter ego: </b>{hero.alter_ego}</li>
          <li className="list-group-item"> <b>Publisher: </b>{hero.publisher}</li>
          <li className="list-group-item"> <b>First appearence: </b>{hero.first_appearance}</li>
        </ul>

        <h5 className="mt-5">Characters</h5>
        <p>{hero.characters}</p>

        <button
          className="btn btn-outline-primary"
          onClick={onNavigateBack}>
          Volver
        </button>
      </div>
    </div>
  )
}
