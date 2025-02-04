interface IPolaroidProps {
  children: React.ReactNode;
}

const Polaroid = ({children } : IPolaroidProps) => {
  return (
  <div className="bg-white px-3 pt-3 pb-10">
    {children}
  </div>
  )
}

export default Polaroid;