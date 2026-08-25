function PageError() {
  return (
    <div className="flex h-[500px] items-center justify-center">
      <section className="flex h-[300px] w-[300px] flex-col items-center justify-center rounded-2xl bg-red-400">
        <h1 className="text-[120px]">404</h1>
        <h2 className="text-center">
          Erro 404, essa página não existe mais
        </h2>
      </section>
    </div>
  );
}

export default PageError;