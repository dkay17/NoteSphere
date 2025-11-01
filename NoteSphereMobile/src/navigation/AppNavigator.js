import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useAuth } from '../context/AuthContext';
import LoadingSpinner from '../components/LoadingSpinner';

import LoginScreen from '../screens/auth/LoginScreen';
import RegisterScreen from '../screens/auth/RegisterScreen';

import HomeScreen from '../screens/main/HomeScreen';
import BrowseScreen from '../screens/main/BrowseScreen';
import UploadScreen from '../screens/main/UploadScreen';
import MyNotesScreen from '../screens/main/MyNotesScreen';
import ProfileScreen from '../screens/main/ProfileScreen';
import NoteDetailScreen from '../screens/main/NoteDetailScreen';
import AdminScreen from '../screens/AdminScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainTabs = () => (
  <Tab.Navigator screenOptions={{ headerShown: false }}>
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="Browse" component={BrowseScreen} />
    <Tab.Screen name="Upload" component={UploadScreen} />
    <Tab.Screen name="My Notes" component={MyNotesScreen} />
    <Tab.Screen name="Profile" component={ProfileScreen} />
  </Tab.Navigator>
);

const AppNavigator = () => {
  const { isAuthenticated, isAdmin, loading } = useAuth();
  if (loading) return <LoadingSpinner />;

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {!isAuthenticated ? (
          <>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Register" component={RegisterScreen} />
          </>
        ) : (
          <>
            <Stack.Screen name="Main" component={MainTabs} />
            <Stack.Screen name="NoteDetail" component={NoteDetailScreen} />
            {isAdmin && <Stack.Screen name="Admin" component={AdminScreen} />}
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
