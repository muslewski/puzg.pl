function BoxWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col lg:flex-row gap-x-10 gap-y-16 justify-between bg-gradient-to-tr from-gray-800/20 p-6 rounded-3xl backdrop-blur-sm">
      {children}
    </div>
  );
}
