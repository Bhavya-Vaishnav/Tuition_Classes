"use client";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../../components/ui/dialog";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { Textarea } from "../../components/ui/textarea";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";
import { toast } from "sonner";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1500));

      toast.success("Message sent successfully!", {
        description: "We will get back to you within 24 hours.",
      });

      setFormData({ name: "", email: "", subject: "", message: "" });
      setShowSuccessDialog(true);
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="py-16 sm:py-20 lg:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-br from-violet-50 via-white to-blue-50"></div>
      <div className="absolute top-20 right-20 w-64 h-64 bg-violet-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm border border-violet-100 rounded-full mb-4">
            <span className="text-sm text-violet-600">Contact Us</span>
          </div>
          <h1 className="text-slate-900 mb-4">Get In Touch</h1>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Have questions? We'd love to hear from you. Send us a message and
            we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="border-0 bg-white/60 backdrop-blur-sm shadow-lg hover:shadow-xl transition-shadow group">
              <CardHeader>
                <div className="h-14 w-14 bg-linear-to-br from-violet-500 to-purple-600 rounded-2xl flex items-center justify-center mb-2 shadow-lg group-hover:scale-110 transition-transform">
                  <Mail className="h-7 w-7 text-white" />
                </div>
                <CardTitle className="text-slate-900">Email Us</CardTitle>
                <CardDescription>Our team is here to help</CardDescription>
              </CardHeader>
              <CardContent>
                <a
                  href="mailto:info@educlass.com"
                  className="text-violet-600 hover:underline"
                >
                  info@educlass.com
                </a>
              </CardContent>
            </Card>

            <Card className="border-0 bg-white/60 backdrop-blur-sm shadow-lg hover:shadow-xl transition-shadow group">
              <CardHeader>
                <div className="h-14 w-14 bg-linear-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mb-2 shadow-lg group-hover:scale-110 transition-transform">
                  <Phone className="h-7 w-7 text-white" />
                </div>
                <CardTitle className="text-slate-900">Call Us</CardTitle>
                <CardDescription>Mon-Fri from 8am to 8pm</CardDescription>
              </CardHeader>
              <CardContent>
                <a
                  href="tel:+15551234567"
                  className="text-violet-600 hover:underline"
                >
                  +91 94272 33039
                </a>
              </CardContent>
            </Card>

            <Card className="border-0 bg-white/60 backdrop-blur-sm shadow-lg hover:shadow-xl transition-shadow group">
              <CardHeader>
                <div className="h-14 w-14 bg-linear-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-2 shadow-lg group-hover:scale-110 transition-transform">
                  <MapPin className="h-7 w-7 text-white" />
                </div>
                <CardTitle className="text-slate-900">Visit Us</CardTitle>
                <CardDescription>Come say hello</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Shyam Nagar Main Road Street No 2, 7
                  <br />
                  Jamnagar, Gujarat 361006
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-0 bg-white/60 backdrop-blur-sm shadow-xl">
              <CardHeader>
                <CardTitle className="text-slate-900">
                  Send us a message
                </CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you as soon as
                  possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleChange}
                        className="bg-white/50 border-slate-200 focus:border-violet-500 focus:ring-violet-500"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        className="bg-white/50 border-slate-200 focus:border-violet-500 focus:ring-violet-500"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="How can we help you?"
                      value={formData.subject}
                      onChange={handleChange}
                      className="bg-white/50 border-slate-200 focus:border-violet-500 focus:ring-violet-500"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us more about your inquiry..."
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className="bg-white/50 border-slate-200 focus:border-violet-500 focus:ring-violet-500 resize-none"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full sm:w-auto gap-2 bg-linear-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 shadow-lg shadow-violet-500/30"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Success Dialog */}
      <Dialog open={showSuccessDialog} onOpenChange={setShowSuccessDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <CheckCircle className="h-6 w-6 text-green-500" />
              Inquiry Sent Successfully!
            </DialogTitle>
            <DialogDescription className="space-y-4">
              <div>
                Thank you for reaching out to P H Sodha Classes. We have
                received your inquiry and will get back to you within 24 hours.
              </div>
              <div className="bg-slate-50 p-4 rounded-lg space-y-2">
                <div className="font-medium text-slate-900">
                  Contact Details:
                </div>
                <div className="text-slate-600">
                  Phone: +91 94272 33039
                  <br />
                  Email: info@educlass.com
                  <br />
                  Hours: Monday-Friday, 8am-8pm
                </div>
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}
