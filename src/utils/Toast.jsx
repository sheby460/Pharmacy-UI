import React, { useEffect } from "react";
import { CheckCircle, XCircle, X } from "lucide-react";

function Toast({ message, type = "success", onClose }) {
  useEffect(() => {
    const timer = setTimeout(onClose, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  const icons = {
    success: <CheckCircle className="h-5 w-5 text-green-500" />,
    error: <XCircle className="h-5 w-5 text-red-500" />,
  };

  const bgColors = {
    success: "bg-green-50 border-green-200",
    error: "bg-red-50 border-red-200",
  };

  return (
    <div className="fixed top-4 right-4 z-50 max-w-md w-full animate-slideDown">
      <div className={`flex items-center p-4 rounded-lg border ${bgColors[type]} shadow-lg`}>
        {icons[type]}
        <p className="ml-3 text-sm font-medium text-gray-900 flex-1">{message}</p>
        <button onClick={onClose} className="p-1 hover:bg-gray-200 rounded-lg transition-colors">
          <X className="h-4 w-4 text-gray-500" />
        </button>
      </div>
    </div>
  );
}

export default Toast;