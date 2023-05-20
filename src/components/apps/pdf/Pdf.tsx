export const Pdf = () => {
  return (
    <div className="flex flex-col w-full h-full bg-slate-200">
      <object
        className="w-full h-full rounded-lg"
        data="https://static.mertyildirir.com/media/cv/mert_yildirir_cv.pdf"
        type="application/pdf"
      >
        <iframe
          className="w-full h-full rounded-lg"
          title="pdf"
          src="https://docs.google.com/viewer?url=https://static.mertyildirir.com/media/cv/mert_yildirir_cv.pdf&embedded=true"
        />
      </object>
    </div>
  );
};
