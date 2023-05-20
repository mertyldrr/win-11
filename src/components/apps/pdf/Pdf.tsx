export const Pdf = () => {
  return (
    <div className="flex flex-col w-full h-full bg-slate-200 rounded-b-lg">
      <object
        className="w-full h-full rounded-b-lg"
        data="https://static.mertyildirir.com/media/cv/mert_yildirir_cv.pdf"
        type="application/pdf"
      >
        <iframe
          className="w-full h-full"
          title="pdf"
          src="https://docs.google.com/viewer?url=https://static.mertyildirir.com/media/cv/mert_yildirir_cv.pdf&embedded=true"
        />
      </object>
    </div>
  );
};
