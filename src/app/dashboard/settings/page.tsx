'use client';

import { useEffect, useState } from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import { useAuth } from '@/contexts/AuthContext';
import { useRouter } from 'next/navigation';
import { Save, User, Shield, Bell } from 'lucide-react';
import PageHeader from "@/components/PageHeader";

export default function SettingsPage() {
  const { user, loading } = useAuth();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [settings, setSettings] = useState({
    emailNotifications: true,
    blogAutoSave: true,
    autoPublish: false,
  });

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login');
    }
  }, [user, loading, router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Here you would typically save to Firebase
      console.log('Saving settings:', settings);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      alert('Settings saved successfully!');
    } catch (error) {
      console.error('Error saving settings:', error);
      alert('Error saving settings');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSettingChange = (setting: string, value: boolean) => {
    setSettings(prev => ({
      ...prev,
      [setting]: value,
    }));
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <PageHeader
          title="Settings"
          subtitle="Manage your account and application settings"
        />

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Profile Settings */}
          <div className="bg-white shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <div className="flex items-center">
                <User className="h-5 w-5 text-gray-400 mr-3" />
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  Profile Information
                </h3>
              </div>
              <div className="mt-4">
                <dl className="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2">
                  <div>
                    <dt className="text-sm font-medium text-gray-500">Email</dt>
                    <dd className="mt-1 text-sm text-gray-900">{user.email}</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500">Account Status</dt>
                    <dd className="mt-1 text-sm text-gray-900">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        Active
                      </span>
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>

          {/* Blog Settings */}
          <div className="bg-white shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <div className="flex items-center">
                <Shield className="h-5 w-5 text-gray-400 mr-3" />
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  Blog Settings
                </h3>
              </div>
              <div className="mt-4 space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <label className="text-sm font-medium text-gray-700">
                      Auto-save drafts
                    </label>
                    <p className="text-sm text-gray-500">
                      Automatically save your blog posts as you write
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleSettingChange('blogAutoSave', !settings.blogAutoSave)}
                    className={`${
                      settings.blogAutoSave ? 'bg-indigo-600' : 'bg-gray-200'
                    } relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2`}
                  >
                    <span
                      className={`${
                        settings.blogAutoSave ? 'translate-x-5' : 'translate-x-0'
                      } pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out`}
                    />
                  </button>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <label className="text-sm font-medium text-gray-700">
                      Auto-publish posts
                    </label>
                    <p className="text-sm text-gray-500">
                      Automatically publish posts when saved
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleSettingChange('autoPublish', !settings.autoPublish)}
                    className={`${
                      settings.autoPublish ? 'bg-indigo-600' : 'bg-gray-200'
                    } relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2`}
                  >
                    <span
                      className={`${
                        settings.autoPublish ? 'translate-x-5' : 'translate-x-0'
                      } pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out`}
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Notification Settings */}
          <div className="bg-white shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <div className="flex items-center">
                <Bell className="h-5 w-5 text-gray-400 mr-3" />
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  Notification Settings
                </h3>
              </div>
              <div className="mt-4">
                <div className="flex items-center justify-between">
                  <div>
                    <label className="text-sm font-medium text-gray-700">
                      Email notifications
                    </label>
                    <p className="text-sm text-gray-500">
                      Receive email notifications for important updates
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleSettingChange('emailNotifications', !settings.emailNotifications)}
                    className={`${
                      settings.emailNotifications ? 'bg-indigo-600' : 'bg-gray-200'
                    } relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2`}
                  >
                    <span
                      className={`${
                        settings.emailNotifications ? 'translate-x-5' : 'translate-x-0'
                      } pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out`}
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Save Button */}
          <div className="flex justify-end">
            <button
              type="submit"
              disabled={isLoading}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Save className="h-4 w-4 mr-2" />
              {isLoading ? 'Saving...' : 'Save Settings'}
            </button>
          </div>
        </form>
      </div>
    </DashboardLayout>
  );
} 