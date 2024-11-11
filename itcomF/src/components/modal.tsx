export const Modal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;
  
    return (
      <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
        <div className="bg-white rounded-lg p-6 max-w-2xl w-full relative">
          {/* Close Button */}
          <button
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
            onClick={onClose}
          >
            ✕
          </button>
  
          {/* Embedded Video */}
          <div className="w-full h-64 md:h-96">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/D0UnqGm_miA?si=hoNlcCMcl7cs1jbP" // Replace with your video URL or ID
              title="Video Title"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    );
  };