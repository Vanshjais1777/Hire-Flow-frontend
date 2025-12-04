import axiosClient from "./axiosClient";
import {
  CreateInterviewRequest,
  Interview,
  SubmitFeedbackRequest,
  UpdateInterviewStatusRequest,
} from "@/types/interview";

export const interviewApi = {
  create: async (
    data: CreateInterviewRequest
  ): Promise<{ success: boolean; message: string; interview: Interview }> => {
    const response = await axiosClient.post("/is/create", data);
    // Backend returns: { success, message, interview }
    return response.data;
  },

  list: async (): Promise<{ success: boolean; interviews: Interview[] }> => {
    const response = await axiosClient.get("/is/list");
    // Backend returns: { success, interviews }
    return response.data;
  },

  updateStatus: async (
    id: string,
    data: UpdateInterviewStatusRequest
  ): Promise<{ success: boolean; message: string; interview: Interview }> => {
    const response = await axiosClient.put(`/is/status/${id}`, data);
    // Backend returns: { success, message, interview }
    return response.data;
  },

  submitFeedback: async (
    id: string,
    data: SubmitFeedbackRequest
  ): Promise<{ success: boolean; message: string; interview: Interview }> => {
    const response = await axiosClient.post(`/is/feedback/${id}`, data);
    // Backend returns: { success, message, interview }
    return response.data;
  },
};
