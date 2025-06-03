export default function MeaningPanel({
  meaning,
  onClose,
}: {
  meaning: string;
  onClose: () => void;
}) {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t p-4 shadow-lg z-50">
      <div className="flex justify-between items-center">
        <h2 className="font-bold">Meaning</h2>
        <button onClick={onClose}>Close</button>
      </div>
      <p>{meaning}</p>
    </div>
  );
}
