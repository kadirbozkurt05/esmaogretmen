const Student = ({student}) => {
  return (
        <div className="grid rounded-3xl max-w-[370px] shadow-sm bg-slate-100  flex-col mx-auto">
          <img
            src="https://m.media-amazon.com/images/M/MV5BMzI0NmVkMjEtYmY4MS00ZDMxLTlkZmEtMzU4MDQxYTMzMjU2XkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_QL75_UX380_CR0,1,380,562_.jpg"
            width="375"
            height="200"
            className="rounded-t-3xl justify-center grid h-80 object-cover"
            alt="movie.title"
          />

          <div className="group p-6 grid z-10">
            <a
              href={"#"}
              className="group-hover:text-cyan-700 font-bold sm:text-2xl line-clamp-2"
            >
              {student?.data?.firstName} {student.lastName}
            </a>
            <span className="text-slate-400 pt-2 font-semibold">
              (3. Sınıf)
            </span>
            <div>Aktif</div>
          </div>
        </div>
  );
};

export default Student;
