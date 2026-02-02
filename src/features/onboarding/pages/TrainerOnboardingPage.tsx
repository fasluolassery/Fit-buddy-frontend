import { useState } from "react";
import { Upload, Plus, X, FileText } from "lucide-react";
import { GlassCard } from "../../../shared/components/ui";
import { useTrainerOnboardingForm } from "../hooks/useTrainerOnboardingForm";
import { FormErrorMessage } from "../../../shared/components/form/FormErrorMessage";
import { FormSubmitButton } from "../../../shared/components/form/FormSubmitButton";
import type { TrainerOnboardingInput } from "../validation";

export default function TrainerOnboardingPage() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useTrainerOnboardingForm();

  // UI-only state
  const [specializations, setSpecializations] = useState<string[]>([]);
  const [certificates, setCertificates] = useState<File[]>([]);
  const [profilePhoto, setProfilePhoto] = useState<File | null>(null);
  const [photoPreview, setPhotoPreview] = useState<string | null>(null);
  const [inputSpec, setInputSpec] = useState("");

  /* ------------------ handlers ------------------ */

  const addSpec = () => {
    if (!inputSpec.trim()) return;

    const updated = [...specializations, inputSpec.trim()];
    setSpecializations(updated);
    setValue("specializations", updated, { shouldValidate: true });
    setInputSpec("");
  };

  const removeSpec = (index: number) => {
    const updated = specializations.filter((_, i) => i !== index);
    setSpecializations(updated);
    setValue("specializations", updated, { shouldValidate: true });
  };

  const handlePhotoChange = (file?: File) => {
    if (!file) return;

    setProfilePhoto(file);
    setPhotoPreview(URL.createObjectURL(file));
    setValue("profilePhoto", file, { shouldValidate: true });
  };

  const handleCertificatesChange = (files: FileList | null) => {
    if (!files) return;

    const updated = [...certificates, ...Array.from(files)];
    setCertificates(updated);
    setValue("certificates", updated, { shouldValidate: true });
  };

  const removeCertificate = (index: number) => {
    const updated = certificates.filter((_, i) => i !== index);
    setCertificates(updated);
    setValue("certificates", updated, { shouldValidate: true });
  };

  /* ------------------ submit ------------------ */

  const onSubmit = async (data: TrainerOnboardingInput) => {
    // later → convert to FormData and call API
    console.log("TRAINER ONBOARDING DATA", data);
  };

  /* ------------------ UI ------------------ */

  return (
    <div className="min-h-screen px-8 py-10 text-white">
      <GlassCard className="mx-auto max-w-3xl rounded-[2rem] border border-zinc-900 bg-[#0c0c0c] p-8">
        <h1 className="mb-6 text-2xl font-bold">Trainer Onboarding</h1>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Profile Photo */}
          <div>
            <label className="mb-2 block text-sm text-zinc-400">
              Profile Photo
            </label>

            <div className="flex items-center gap-5">
              <div className="relative flex h-28 w-28 items-center justify-center overflow-hidden rounded-2xl border border-zinc-800 bg-[#0a0a0a]">
                {photoPreview ? (
                  <img
                    src={photoPreview}
                    alt="Preview"
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <Upload className="text-zinc-600" />
                )}
              </div>

              <label className="cursor-pointer rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-2 text-xs font-semibold transition hover:border-[#D4AF37]/30 hover:bg-[#D4AF37]/10">
                Upload Image
                <input
                  type="file"
                  accept="image/*"
                  hidden
                  onChange={(e) => handlePhotoChange(e.target.files?.[0])}
                />
              </label>
            </div>

            <FormErrorMessage message={errors.profilePhoto?.message} />
          </div>

          {/* Bio */}
          <div>
            <label className="mb-2 block text-sm text-zinc-400">Bio</label>
            <textarea
              {...register("bio")}
              rows={4}
              placeholder="Brief professional summary"
              className="w-full rounded-xl border border-zinc-800 bg-[#0a0a0a] px-4 py-3 text-sm outline-none"
            />
            <FormErrorMessage message={errors.bio?.message} />
          </div>

          {/* Experience */}
          <div>
            <label className="mb-2 block text-sm text-zinc-400">
              Experience (years)
            </label>
            <input
              type="number"
              {...register("experience")}
              className="w-full rounded-xl border border-zinc-800 bg-[#0a0a0a] px-4 py-3 text-sm outline-none"
            />
            <FormErrorMessage message={errors.experience?.message} />
          </div>

          {/* Specializations */}
          <div>
            <label className="mb-2 block text-sm text-zinc-400">
              Specializations
            </label>

            <div className="mb-3 flex gap-2">
              <input
                value={inputSpec}
                onChange={(e) => setInputSpec(e.target.value)}
                placeholder="e.g. Strength Training"
                className="flex-1 rounded-xl border border-zinc-800 bg-[#0a0a0a] px-4 py-2 text-sm outline-none"
              />
              <button
                type="button"
                onClick={addSpec}
                className="rounded-xl border border-zinc-800 bg-zinc-900 px-4 transition hover:border-[#D4AF37]/30 hover:bg-[#D4AF37]/10"
              >
                <Plus size={18} />
              </button>
            </div>

            <div className="flex flex-wrap gap-2">
              {specializations.map((spec, i) => (
                <span
                  key={i}
                  className="flex items-center gap-2 rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/10 px-3 py-1 text-xs font-semibold text-[#D4AF37]"
                >
                  {spec}
                  <X
                    size={14}
                    className="cursor-pointer"
                    onClick={() => removeSpec(i)}
                  />
                </span>
              ))}
            </div>

            <FormErrorMessage message={errors.specializations?.message} />
          </div>

          {/* Certificates */}
          <div>
            <label className="mb-2 block text-sm text-zinc-400">
              Certificates (PDF / Image)
            </label>

            <label className="mb-3 inline-flex cursor-pointer items-center gap-2 rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-2 text-xs font-semibold transition hover:border-[#D4AF37]/30 hover:bg-[#D4AF37]/10">
              <Upload size={14} /> Upload Files
              <input
                type="file"
                multiple
                accept="application/pdf,image/*"
                hidden
                onChange={(e) => handleCertificatesChange(e.target.files)}
              />
            </label>

            <div className="space-y-2">
              {certificates.map((file, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between rounded-xl border border-zinc-800 bg-[#0a0a0a] px-4 py-2"
                >
                  <div className="flex items-center gap-3 text-sm">
                    <FileText size={16} className="text-[#D4AF37]" />
                    <span className="max-w-[200px] truncate">{file.name}</span>
                  </div>
                  <X
                    size={16}
                    className="cursor-pointer text-zinc-500 hover:text-red-400"
                    onClick={() => removeCertificate(i)}
                  />
                </div>
              ))}
            </div>

            <FormErrorMessage message={errors.certificates?.message} />
          </div>

          {/* Submit */}
          <FormSubmitButton
            label="Submit for Review"
            loadingLabel="Submitting..."
            submitting={isSubmitting}
          />
        </form>
      </GlassCard>
    </div>
  );
}
