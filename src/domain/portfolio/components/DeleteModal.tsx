"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import { useGallery } from "../hooks/useGalleryProvider";

interface DeleteModalProps {
  open: boolean;
  onClose: () => void;
  ids: string[];
}

export default function DeleteModal({ open, onClose, ids }: DeleteModalProps) {
  const { removeImages } = useGallery();

  useEffect(() => {
    if (!open) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [open, onClose]);


  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev || "";
    };
  }, [open]);

  function handleConfirm() {
    if (!ids || ids.length === 0) {
      onClose();
      return;
    }
    removeImages(ids);
    onClose();
  }

  if (!open) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose} 
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          className="bg-white rounded-xl shadow-xl p-6 w-[90%] max-w-sm"
          onClick={(e) => e.stopPropagation()} 
        >
          <h2 className="text-lg font-semibold text-gray-800">Excluir fotos</h2>

          <p className="text-sm text-gray-600 mt-2">
            Tem certeza que deseja excluir <strong>{ids.length}</strong> foto
            {ids.length > 1 ? "s" : ""}? Essa ação não pode ser desfeita.
          </p>

          <div className="mt-6 flex justify-end gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-md text-gray-700 bg-gray-100 hover:bg-gray-200 transition"
            >
              Cancelar
            </button>

            <button
              onClick={handleConfirm}
              className="px-4 py-2 rounded-md bg-red-600 text-white hover:bg-red-700 transition"
            >
              Excluir
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
